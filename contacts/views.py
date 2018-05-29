from django.shortcuts import render
from .models import *
from django.views.generic.edit import CreateView, UpdateView
from django.views.generic.list import ListView


# Create your views here.
class CreateContact(CreateView):
    model = Contact

    fields = ['fio','phone1','email1','phone2','email2','inputDate','verifyDate',
    'fromSource','fromDate']

    success_url = '/c'


class UpdateContact(UpdateView):
    model = Contact
    fields = ['fio','phone1','email1','phone2','email2','inputDate','verifyDate',
    'fromSource','fromDate']


class ListContacts(ListView):
    model = Contact
    fields = ['fio','phone1','email1','phone2','email2','inputDate','verifyDate',
    'fromSource','fromDate']
