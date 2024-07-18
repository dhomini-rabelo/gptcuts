from rest_framework.exceptions import ErrorDetail

class ErrorMessages:
    REQUIRED = ErrorDetail(string='This field is required', code='required')
    DIFFERENT_PASSWORDS = ErrorDetail(string='The passwords are different', code='different_passwords')
    FORBIDDEN = ErrorDetail(string='You do not have permission to perform this action', code='forbidden')
