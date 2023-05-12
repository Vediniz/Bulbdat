from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('singUp/', views.singUp, name='singUp')
    # path("ambiente/", views.ambiente, name="ambiente"),
    # path('index/', views.index, name='index'),
]