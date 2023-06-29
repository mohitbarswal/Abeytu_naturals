# Generated by Django 4.1.7 on 2023-04-05 06:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Sitedata', '0016_alter_homesection_best_seller_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homesection',
            name='unique_heading',
        ),
        migrations.RemoveField(
            model_name='homesection',
            name='unique_image',
        ),
        migrations.CreateModel(
            name='Addunique',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unique_heading', models.CharField(blank=True, max_length=100, null=True)),
                ('unique_image', models.FileField(blank=True, null=True, upload_to='images/')),
                ('homesection', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='adduniques', to='Sitedata.homesection')),
            ],
        ),
    ]
