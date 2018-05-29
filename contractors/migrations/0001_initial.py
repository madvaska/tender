# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-28 11:07
from __future__ import unicode_literals

import contractors.models
import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('information_sources', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contractor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, unique=True, verbose_name='Название компании')),
                ('inn', models.CharField(max_length=12, unique=True, validators=[contractors.models.validate_inn])),
                ('inputDate', models.DateField(default=datetime.datetime.today)),
                ('verifyDate', models.DateField(default=datetime.datetime.today)),
                ('fromDate', models.DateField(default=datetime.datetime.today)),
                ('fromSource', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='information_sources.InformationSource')),
            ],
        ),
    ]