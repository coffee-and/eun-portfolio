try:
    import compact_portfolio  # noqa: F401
except RuntimeError as error:
    print(f"style verification warning: {error}")
