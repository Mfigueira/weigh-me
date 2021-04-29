def update_postgres_url(url):
    return url.replace('postgres://', 'postgresql://', 1)


def new_weighing_dict(id, weight, datetime):
    return {
        'id': id,
        'weight': weight,
        'datetime': datetime
    }