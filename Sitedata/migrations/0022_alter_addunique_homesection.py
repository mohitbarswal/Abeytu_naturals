# Generated by Django 4.2 on 2023-04-06 13:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Sitedata', '0021_alter_addunique_homesection'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addunique',
            name='homesection',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='adduniques', to='Sitedata.homesection'),
        ),
    ]
