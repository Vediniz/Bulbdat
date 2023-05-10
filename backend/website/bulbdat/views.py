from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Olá! Mundinho!")

def home(request):
    return render(request, 'index.html')