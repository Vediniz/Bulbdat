from django.shortcuts import render
from django.contrib.auth import authenticate, login

# Create your views here.
def login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password") 
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            redirect("profile")
        #authenticate

    return render(request, "login.html")

def signup(request):
    return render(request, "signup.html")

def profile(request):
    return render(request, "profile.html")