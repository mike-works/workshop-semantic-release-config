declare module '@semantic-release/error' {
  class SemanticReleaseError extends Error {
    constructor(message?: string, errorCode?: string, details?: string);
  }
  export = SemanticReleaseError;
}
