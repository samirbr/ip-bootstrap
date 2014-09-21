# Various bootstrap constants and enums
def enum(**enums):
    """
    Make an iterable enumeration

    >>> Foo = enum(bar="bar")
    >>> Foo.bar
    'bar'
    >>> list(Foo)
    ['bar']

    """
    class Enum(object):
        class __metaclass__(type):
            def __iter__(self):
                return enums.values().__iter__()
    [setattr(Enum, *en) for en in enums.items()]
    return Enum

Context = enum(**dict((name, name) for name in [
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "danger",
    "link"
]))

Size = enum(**{
    "default": None,
    "small": "sm",
    "large": "lg",
    "extra_small": "xs"
})