import React, { useEffect } from 'react';

const RandomQuoteResolver: React.FC = () => {
  useEffect(() => {
    interface ResolveOptions {
      resolveString?: string | null | undefined;
      characters: string[];
      timeout: number;
      iterations: number;
      element: HTMLElement;
      offset: number;
      partialString?: string; // Agregamos la propiedad partialString
    }

    interface RandomizerCallback {
      (): void;
    }

    const resolver = {
      resolve(options: ResolveOptions, callback?: RandomizerCallback): void {
        const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
        const combinedOptions: ResolveOptions = { ...options, resolveString };

        function getRandomInteger(min: number, max: number): number {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function randomCharacter(characters: string[]): string {
          return characters[getRandomInteger(0, characters.length - 1)];
        }

        function doRandomiserEffect(options: ResolveOptions, callback: RandomizerCallback): void {
          const { characters, timeout, element, partialString, iterations } = options;

          let currentIterations = iterations;

          setTimeout(() => {
            if (currentIterations >= 0) {
              const nextOptions: ResolveOptions = { ...options, iterations: currentIterations - 1 };

              if (currentIterations === 0) {
                element.textContent = partialString ?? ''; // Corregimos aquí con el operador ?? para asignar una cadena vacía si es undefined
              } else {
                element.textContent = (partialString ?? '').substring(0, (partialString ?? '').length - 1) + randomCharacter(characters);
              }

              doRandomiserEffect(nextOptions, callback);
            } else if (typeof callback === "function") {
              callback();
            }
          }, timeout);
        }

        function doResolverEffect(options: ResolveOptions, callback?: RandomizerCallback): void {
          const { resolveString, offset } = options;

          if (offset <= resolveString!.length) {
            const partialString = resolveString!.substring(0, offset);
            const combinedOptions: ResolveOptions = { ...options, partialString };

            doRandomiserEffect(combinedOptions, () => {
              const nextOptions: ResolveOptions = { ...options, offset: offset + 1 };
              doResolverEffect(nextOptions, callback);
            });
          } else if (typeof callback === "function") {
            callback();
          }
        }

        doResolverEffect(combinedOptions, callback);
      }
    };

    const options: ResolveOptions = {
      offset: 0,
      timeout: 5,
      iterations: 10,
      characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
      resolveString: 'ABOUT_ME()', // Cambia aquí a la palabra que desees resolver
      element: document.querySelector('[data-target-resolver]') as HTMLElement,
    };

    function callback() {
      // Detener el efecto después de la primera iteración
      // Comenta esta línea si deseas que el efecto continúe de forma infinita.
      return;
    }

    resolver.resolve(options, callback);

    // Limpieza cuando se desmonta el componente
    return () => {
      // Puedes agregar aquí alguna lógica de limpieza si es necesario
      // Por ejemplo, detener el efecto de resolución aleatoria antes de desmontar el componente.
    };
  }, []);

  return (
    <div className="container">
      <h1 className="about-me" data-target-resolver></h1>
    </div>
  );
};

export default RandomQuoteResolver;
