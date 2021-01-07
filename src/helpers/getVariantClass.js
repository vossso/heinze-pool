const getVariantClasses = (className, variant) => {
    const classPrefix = ` ${className}--`;
  
    const variantClasses = !variant
      ? ''
      : typeof variant === 'string'
      ? classPrefix + variant
      : (variant).reduce(
          (previousValue, currentValue) =>
            previousValue + classPrefix + currentValue,
          ''
        );
  
    return className + variantClasses;
  };
  
  export default getVariantClasses;
  