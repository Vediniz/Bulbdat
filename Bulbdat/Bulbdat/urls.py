from django.contrib import admin
from django.urls import path, include
# from . import views

urlpatterns = [
    path('', include('home.urls'), name='home'),
    path('admin/', admin.site.urls),
    path('users/', include('users.urls'), name='users'),
]
