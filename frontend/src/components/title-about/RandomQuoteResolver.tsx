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
          const { resolveString, characters, offset } = options;
          const partialString = resolveString!.substring(0, offset);
          const combinedOptions: ResolveOptions = { ...options, partialString };

          doRandomiserEffect(combinedOptions, () => {
            const nextOptions: ResolveOptions = { ...options, offset: offset + 1 };

            if (offset <= resolveString!.length) {
              doResolverEffect(nextOptions, callback);
            } else if (typeof callback === "function") {
              callback();
            }
          });
        }

        doResolverEffect(combinedOptions, callback);
      }
    };

    const strings: string[] = [
      'Oh thank god, you\'re alright.',
      'You know, being Caroline taught me a valuable lesson. I thought you were my greatest enemy. When all along you were my best friend.',
      'The surge of emotion that shot through me when I saved your life taught me an even more valuable lesson: where Caroline lives in my brain.',
      'Goodbye, Caroline.',
      'You know, deleting Caroline just now taught me a valuable lesson. The best solution to a problem is usually the easiest one. And I\'ll be honest.',
      'Killing you? Is hard.',
      'You know what my days used to be like? I just tested. Nobody murdered me. Or put me in a potato. Or fed me to birds. I had a pretty good life.',
      'And then you showed up. You dangerous, mute lunatic. So you know what?',
      'You win.',
      'Just go.',
      'It\'s been fun. Don\'t come back.',
      '......'
    ];

    let counter: number = 0;

    const options: ResolveOptions = {
      offset: 0,
      timeout: 5,
      iterations: 10,
      characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
      resolveString: strings[counter],
      element: document.querySelector('[data-target-resolver]') as HTMLElement,
    };

    function callback() {
      setTimeout(() => {
        counter++;

        if (counter >= strings.length) {
          counter = 0;
        }

        const nextOptions = { ...options, resolveString: strings[counter] };
        resolver.resolve(nextOptions, callback);
      }, 1000);
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
      <h1 className="heading" data-target-resolver></h1>
    </div>
  );
};

export default RandomQuoteResolver;
