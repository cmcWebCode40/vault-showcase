export const schemas = {
  'health/pathology/tests/covid19-pcr': {
    view: [
      'name',
      'fullName',
      'dateOfBirth',
      'healthNumber',
      'testTimestamp',
      'testType',
      'testResult'
    ],
    create: [
      'name',
      'fullName',
      'dateOfBirth',
      'healthNumber',
      'testTimestamp',
      'testType',
      'testResult'
    ]
  },
  'shopping/coupon': {
    view: [
      'name',
      'description',
      'value',
      'valueType',
      'currency',
      'barcode'
    ],
    create: [
      'name',
      'description',
      'value',
      'valueType',
      'currency',
      'barcode'
    ]
  },
  'identity/kyc/AU': {
    view: [
      'firstName',
      'lastName',
      'gender',
      'dateOfBirth',
      'streetAddress1',
      'suburb',
      'state',
      'postcode'
    ],
    create: [
      'firstName',
      'lastName',
      'gender',
      'dateOfBirth',
      'streetAddress1',
      'suburb',
      'state',
      'postcode'
    ]
  }
}
