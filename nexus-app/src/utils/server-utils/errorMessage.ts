export function requiredError(pointer: string) {
  return `${pointer} is required!`;
}

export function invaliError(pointer: string) {
  return `${pointer} is Invalid!`;
}

export function fileSizeError(pointer: string) {
  return `${pointer} size should within 5MB`;
}
