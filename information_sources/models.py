from django.db import models

# Create your models here.
# Название источника информации
# Комментарий
# Кем введена информация
# Когда введена информация


class InformationSource(models.Model):
    """(Источники информации)"""
    name = models.CharField(max_length=150, unique=True, verbose_name="Имя источника информации" )

    class Admin:
        list_display = ('',)
        search_fields = ('',)

    def __unicode__(self):
        return u"InformationSource"

    def __str__(self):
        return self.name
