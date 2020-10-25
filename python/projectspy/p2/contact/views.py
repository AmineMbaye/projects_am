from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Contact

# Create your views here.
def home(request):
    message = "Assalamu Alaykum Wa Rahmatullah Wa Barakaatuhu"
    context = {'message' : message}
    return render(request, "pages/index.html", context)

def about(request):
    return render(request, "pages/about.html")

@login_required(login_url="/login/")
def list_contact(request):
    contacts = Contact.objects.all()
    return render(request, "contacts/list_contact.html", {'contacts' : contacts})

@login_required(login_url="/login/")
def details_contact(request, id):
    contact = get_object_or_404(Contact, id=id)
    return render(request, "contacts/details_contact.html", {'contact' : contact})