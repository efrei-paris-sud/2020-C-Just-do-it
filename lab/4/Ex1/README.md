


# Exercise 1  

In this exercice, we need to upload the Blink LED source code. build the circut and see if it works.

## Schematic 
![Test Image00](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/4/Ex1/130532617_145776116946750_3652552744816391959_n.png)

## Code
 ```Arduino

const int led = 21;
 
// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
}
 
// the loop routine runs over and over again forever:
void loop() {
  digitalWrite(led, HIGH);      // turn the LED on (HIGH is the voltage level)
  delay(1000);                  // wait for a second
  digitalWrite(led, LOW);       // turn the LED off by making the voltage LOW
  delay(1000);                  // wait for a second
}

```
## Board Image
![Board](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/4/Ex1/129411623_133665651685408_4786929376080953025_n.jpg)


## Issues

