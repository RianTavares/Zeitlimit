# Zeitlimit ![Logo](/images/time.png)  

## What is this project? 
While I was a Bosch intern in Germany I noticed the need for optimization in the lunch order process of the company's employees and customers, which at the time was done by phone or in person at the company's secretary. Then I developed a solution integrating an online order form with an order visualization spreadsheet and also a page so that users could access the menu of the week. In addition, I developed a logic in Javascript allowing the company's kitchen to close the order form and open it for the next business day when necessary. In addition to allowing employees and customers to order by cell phone or computer, I also inserted this system into the terminal at the company's entrance. It was a great optimization and an initiative that was recognized by all. Currently (2020) they still use this solution inside


## Introduction /en/
This is a google form optimization. This script can be used to limit responses time in a form.
This script generates a menu in the administration section of this form, with options that make it possible to close the reception of responses and indicate a message to the user. It also enables the form to be restarted and receive replies. In the menu you also have the option to show the current date when the form is started, indicating that the answers will be accepted for "today" or you can show the next business day demonstrating that the answers will be accepted for the next day.

## Introdução /pt/
Script implementado em um fórmulario do google com a finalidade de gerar um menu na seção de administração e edição deste formulário, com opções que possibilitam fechar o recebimento de respostas pelo formulário e indicar uma mensagem para o usuário. O script também altera o título do formulário dependendo da opção escolhida no menu, exibindo como título a data atual, a data do próximo dia ou 3 dias posteriores ao atual (utilizado apenas quando é sexta feira possibilitando o título de indicar o próximo dia útil).

## Einführung /de/
Die Funktion Zeitlimit wurde für das Google Formular entwickelt um die Öffnungszeit des Formulars anpassen zu können. Mit dieser Funktion können wir das Formular öffnen, für den aktuellen Tag, für den nächsten Tag durchzuführen oder um das Formular zuschließen und somit keine Antwort mehr anzunehmen.


### Configuration
To get this running you will need:
* a google account
* and a form created in [google forms] (https://www.google.com/forms/about/)


When you are logged in your google account e alredy have created your google form you have to choose the 
*"<> Script editor"* option on menu like this image below:

![tuto_form1] (/images/1.jpg)

After that you have to paste all the code [Zeitlimit.js] (zeitlimit.js) in the script editor field like on this image below:

![tuto_form2](/images/2.jpg)

Then you should save your project **(CTRL+S)** and click on *"Run"* and right after that you should choose the option *"onOpen"* like the image below:

![tuto_form3](/images/3.jpg)

Click "ok" and "allow" on the pop ups that will appear

Now your function **Zeitlimit** is already running. 
Try to refresh your admin page and click on the puzzle icon like on this image below:

![tuto_form3](/images/4.jpg)

Enjoy it! :)

