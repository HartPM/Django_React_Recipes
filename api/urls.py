from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.getRecipes),
    path('recipes/create/', views.addRecipe),
    path('recipes/<id>/', views.updateRecipe),
    path('recipes/<id>/destroy', views.destroyRecipe)
]