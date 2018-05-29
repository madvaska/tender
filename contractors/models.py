from django.db import models
from django.core.exceptions import ValidationError
import datetime
from information_sources.models import InformationSource

def validate_inn(value):
    if(isinstance(value,str)):
        if( len(value.strip()) in {10,12}):
            withoutLZero = value.lstrip()
            if (len(withoutLZero) == len(str(int(withoutLZero)))):
                return None
    raise ValidationError('%s Это неправильный ИНН' % value)


# Create your models here.
# Откуда взята инфа +
# Когда взята инфа +
# Наименование
# ИНН
# Физический адрес
# Основной электронный почтовый адрес
# Основной телефон
# Дополниетльный телефон
# Руководитель
#

# Основное контактное лицо
# Дополнительное контактное лицо
#

# Дата ввода данных +
# Дата проверки актуальности сведений


class Contractor(models.Model):
    """(Contractor description)"""
    name = models.CharField(max_length=250, unique=True, verbose_name="Название компании")
    inn = models.CharField(max_length=12,unique=True, validators = [validate_inn])

    inputDate = models.DateField(default=datetime.datetime.today)
    verifyDate = models.DateField(default=datetime.datetime.today)
    fromSource = models.ForeignKey(InformationSource, null=True, blank=True)
    fromDate = models.DateField(default=datetime.datetime.today)


    class Admin:
        list_display = ('',)
        search_fields = ('',)

    def __unicode__(self):
        return u"Contractor"
