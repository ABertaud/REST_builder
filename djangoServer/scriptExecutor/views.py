from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def execScript(request):
    print("here")
    if request.method != 'POST':
        return HttpResponse("Should be POST request", status=404)
    print(request.POST)
    return HttpResponse("OK", status=200)