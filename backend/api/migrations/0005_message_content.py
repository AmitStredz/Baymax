# Generated by Django 5.1.1 on 2024-09-28 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_record_record_type_message'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='content',
            field=models.TextField(default='TEXT'),
            preserve_default=False,
        ),
    ]
