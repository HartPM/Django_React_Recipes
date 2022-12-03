from django.db import models

# Create your models here.

class Recipe(models.Model):
    strMeal = models.CharField(max_Length=400)
    strArea = models.CharField(max_Length=200)
    strMealThumb = models.CharField(max_Length=800)
    strIngredient1 = models.CharField(max_Length=200)
    strIngredient2 = models.CharField(max_Length=200)
    strIngredient3 = models.CharField(max_Length=200)
    strIngredient4 = models.CharField(max_Length=200)
    strIngredient5 = models.CharField(max_Length=200)
    strIngredient6 = models.CharField(max_Length=200)
    strIngredient7 = models.CharField(max_Length=200) 
    strIngredient8 = models.CharField(max_Length=200)
    strIngredient9 = models.CharField(max_Length=200)
    strIngredient10 = models.CharField(max_Length=200)
    strInstructions = models.CharField(max_Length=2000)
    created = models.DateTimeField(auto_now_add = True)