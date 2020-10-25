from django.urls import path, re_path
from .views import home, about, list_contact, details_contact

# app_name = AppName

urlpatterns = [
    path("", home, name="index"),
    path("about/", about, name="about"),
    path("contacts/", list_contact, name="contacts"),
    path("contacts/<int:id>/", details_contact, name="details")
]