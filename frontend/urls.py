from django.urls import re_path
from .views import index_view

urlpatterns = [
    re_path("", index_view),
    re_path(
        r"^.*/$", index_view
    ),  # regex matches, then lets routing be handled by the frontend. Still needs a / at end.
]
