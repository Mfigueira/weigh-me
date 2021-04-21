def update_postgres_url(url):
    return url.replace('postgres://', 'postgresql://', 1)


def new_weighing_dict(weight, date, time):
    return {
        'weight': weight,
        'date': date,
        'time': time
    }