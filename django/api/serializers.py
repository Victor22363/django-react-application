from rest_framework import serializers
from one.models import Video, Show, Season


class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'


class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['name', 'id']

class VideoSerializer(serializers.ModelSerializer):
    #show = ShowSerializer()

    class Meta:
        model = Video
        fields = ['id', 'title', 'epNum', 'file', 'show', 'season', 'tags']