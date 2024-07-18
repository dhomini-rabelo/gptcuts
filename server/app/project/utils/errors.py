from rest_framework.exceptions import ErrorDetail

class ErrorMessages:
    REQUIRED = ErrorDetail(string='This field is required', code='required')
    DIFFERENT_PASSWORDS = ErrorDetail(string='The passwords are different', code='different_passwords')
    DUPLICATED_PRODUCT_IN_THE_CART = ErrorDetail(
        string='There is a duplicated product in the cart', code='duplicated_product_in_the_cart'
    )
