from django.contrib import admin
from django.urls import path, include
from bulbdat.views import home

urlpatterns = [
    path("bulbdat/", include("bulbdat.urls")),
    path('admin/', admin.site.urls, name="admin_site"),
    path('', home, name="home")
]
