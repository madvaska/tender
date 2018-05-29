from django.db import models

# Create your models here.
# Название статуса
class TenderStatus(models.Model):
    """(TenderStatus description)"""
    statusName = models.CharField(max_length=150, unique=True, verbose_name="Наименование статуса")

    class Admin:
        list_display = ('',)
        search_fields = ('',)

    def __unicode__(self):
        return u"TenderStatus"

    def __str__(self):
        return self.statusName
