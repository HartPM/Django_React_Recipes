from django.db import models

# Create your models here.

class Recipe(models.Model):
    strMeal = models.CharField(max_length=500)
    strArea = models.CharField(max_length=200)
    strMealThumb = models.CharField(max_length=1000, blank=True)
    strIngredient1 = models.CharField(max_length=200, blank=True)
    strIngredient2 = models.CharField(max_length=200, blank=True)
    strIngredient3 = models.CharField(max_length=200, blank=True)
    strIngredient4 = models.CharField(max_length=200, blank=True)
    strIngredient5 = models.CharField(max_length=200, blank=True)
    strIngredient6 = models.CharField(max_length=200, blank=True)
    strIngredient7 = models.CharField(max_length=200, blank=True) 
    strIngredient8 = models.CharField(max_length=200, blank=True)
    strIngredient9 = models.CharField(max_length=200, blank=True)
    strIngredient10 = models.CharField(max_length=200, blank=True)
    strInstructions = models.CharField(max_length=2000, blank=True)
    created = models.DateTimeField(auto_now_add = True)