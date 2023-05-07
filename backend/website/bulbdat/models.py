from distutils.command.upload import upload
from django.db import models

class User(models.Model):
    id_user=models.IntegerField()
    email=models.CharField(max_length=120)
    name=models.CharField(max_length=32)
    password=models.CharField(max_length=64)


    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

class Enviroment(models.Model):
    id_enviroment = models.IntegerField()
    name = models.CharField(max_length=32)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Environment"
        verbose_name_plural = "Environments"

class Room(models.Model):
    id_rooms=models.IntegerField()
    name=models.CharField(max_length=32)
    id_enviroment=models.ForeignKey(Enviroment, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Room"
        verbose_name_plural = "Rooms"

class Device(models.Model):
    id_devices=models.IntegerField()
    name=models.CharField(max_length=32)
    type=models.CharField(max_length=32)
    consumption=models.FloatField()
    amount=models.IntegerField()
    id_rooms=models.ForeignKey(Room, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Device"
        verbose_name_plural = "Devices"