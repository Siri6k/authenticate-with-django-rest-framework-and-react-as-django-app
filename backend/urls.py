from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("authentication.urls")),
    # make sure to put this include at the end of urlspatterns
    path("", include("frontend.urls")),
]
