from rest_framework.response import Response
from rest_framework.decorators import api_view
from recipe.models import Recipe
from .serializers import RecipeSerializer

@api_view(['GET'])
def getRecipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addRecipe(request):
    serializer = RecipeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'status': 200, 'message': 'Success!'})
    return Response("not valid")

@api_view(['PATCH'])
def updateRecipe(request, id):
    recipe = Recipe.objects.get(id = id)
    data = request.data

    recipe.strMeal = data.get("strMeal", recipe.strMeal)
    recipe.strArea = data.get("strArea", recipe.strArea)
    recipe.strMealThumb = data.get("strMealThumb", recipe.strMealThumb)
    recipe.strIngredient1 = data.get("strIngredient1", recipe.strIngredient1)
    recipe.strIngredient2 = data.get("strIngredient2", recipe.strIngredient2)
    recipe.strIngredient3 = data.get("strIngredient3", recipe.strIngredient3)
    recipe.strIngredient4 = data.get("strIngredient4", recipe.strIngredient4)
    recipe.strIngredient5 = data.get("strIngredient5", recipe.strIngredient5)
    recipe.strIngredient6 = data.get("strIngredient6", recipe.strIngredient6)
    recipe.strIngredient7 = data.get("strIngredient7", recipe.strIngredient7)
    recipe.strIngredient8 = data.get("strIngredient8", recipe.strIngredient8)
    recipe.strIngredient9 = data.get("strIngredient9", recipe.strIngredient9)
    recipe.strIngredient10 = data.get("strIngredient10", recipe.strIngredient10)
    recipe.strInstructions = data.get("strInstructions", recipe.strInstructions)

    recipe.save()
    serializer = RecipeSerializer(recipe)

    return Response({'status': 'ok', 'message': 'Recipe was updated'})


@api_view(['DELETE'])
def destroyRecipe(request, id):
    recipe = Recipe.objects.get(id = id)
    recipe.delete()
    return Response({'status': 204, 'message': 'Recipe was deleted'})