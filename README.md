Base 64 Decoder

A simple, robust base 64 decoder made using vanilla Javascript (well, Typescript actually). Just paste the encoded
string in the left panel and see the output in the right panel. If the input has any invalid characters, they will be
used to split the input into smaller parts and the algorithm will try to decode them separately.

Moreover, if the output is valid JSON, the script will format it using proper indentation.

Future enhancements:

- put each decoded part into a separate text area
- use syntax highlighting on the JSON output
- make JSON output collapsible
