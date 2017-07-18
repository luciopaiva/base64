# Base 64 Decoder

http://luciopaiva.com/base64

A simple, robust base 64 decoder made using vanilla Javascript (well, Typescript actually). Just paste the encoded
string in the left panel and see the output in the right panel. If the input has any invalid characters, they will be
used to split the input into smaller parts and the algorithm will try to decode them separately.

Moreover, if the output is valid JSON, the script will format it with proper indentation (good for parsing JWT tokens). Btw, if you're looking for a good JWT parser, you should try https://jwt.io instead (thanks, [Bernardo](https://github.com/bernardopacheco)).

Future enhancements:

- put each decoded part into a separate visual component
- syntax-highlight JSON output
- make JSON output collapsible
