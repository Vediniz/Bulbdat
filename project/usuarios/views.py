from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import UserForm
from .models import User
# Create your views here.
def index(request):
    return render(request, 'index.html')


# def ambiente(requests):
#     return HttpResponse("ambiente")

# def index(request):
#     if request.method == 'POST':
#         form = UserForm(request.POST)
#         if form.is_valid():
#             print('Formulário é válido')
#             user = form.save(commit=True)
#             user.save()
#             print('Usuário foi salvo:', user)
#             return redirect('home')
#         else:
#             print('Formulário inválido:', form.errors)
#     else:
#         form = UserForm()
#     return render(request, 'index.html', {'form': form})


def singUp(request):
    new_user = User()
    new_user.username = request.POST.get('username') 
    new_user.email = request.POST.get('email')
    new_user.password = request.POST.get('password')
    new_user.save()
    # users = {
    #     'users': User.objects.all()
    # }
    return HttpResponse(request, "index.hml")