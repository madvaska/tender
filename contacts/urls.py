from django.conf.urls import url
from django.contrib import admin
from .views import CreateContact, UpdateContact, ListContacts

urlpatterns = [
    url(r'add(/)?$', CreateContact.as_view(),name="add_contact"),
    url(r'edit/(?P<pk>\d+)?$', UpdateContact.as_view(),name="edit_contact"),
    url(r'$', ListContacts.as_view(),name="list_contacts"),
]
