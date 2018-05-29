from django.db import models
from information_sources.models import InformationSource
from phonenumber_field.modelfields import PhoneNumberField
import datetime

# Create your models here.
# Откуда взята инфа
# Когда взята инфа
# ФИО
# Основной телефон
# Дополнительный телефон
# Основной электронный почтовый адрес
# Дополнительный электронный почтовый адрес

# Дата ввода данных
# Дата проверки актуальности сведений
# Дата проверки актуальности сведений


class Contact(models.Model):
    """(Контакт)"""
    fio = models.CharField(max_length=150,  verbose_name="ФИО")
    phone1 = PhoneNumberField(blank=True)
    email1 = models.EmailField(blank=True)
    phone2 = PhoneNumberField(blank=True)
    email2 = models.EmailField(blank=True)
    inputDate = models.DateField(default=datetime.datetime.today)
    verifyDate = models.DateField(default=datetime.datetime.today)
    fromSource = models.ForeignKey(InformationSource, null=True, blank=True)
    fromDate = models.DateField(default=datetime.datetime.today)

    class Admin:
        list_display = ('',)
        search_fields = ('',)

    def __unicode__(self):
        return u"Contact"

    def __str__(self):
        return self.fio
