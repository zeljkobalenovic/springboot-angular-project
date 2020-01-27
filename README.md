# springboot-angular-project
Razvoj projekta Spring Boot backend + Angular frontend

Koraci 

1   napraviti prazan repo na github sa nazivom projekta
2   u vs code klonirati prazan github repo ( u projects )
3   kreirati novi maven spring boot projekat u gornjem folderu naziv api
4   kreirati novi angular projekt u gornjem folderu naziv webui
5   pom.xml preurediti da se moze build na razne nacine ( dodati kompletnu profile bundle granu + dodati repackage )
6   napraviti proxy za angular 
7   sada imamo sve moguce opcije moze se posebno buildati api , a posebno webui ili zajedno preko profile bundle
8   ako se builda posebno svaki ide na svoj server ako zajedno sve je u spring boot u jednom jar fajlu
9   tokom razvoja moze se nezavisno razvijati api pravis i menjas i pokreces iz vs code
10  angular pokreces sa ng serve + proxy , ako ce na kraju biti zajedno , pa ti netreba cors
11  ili samo ng serve ako ce na kraju biti na dva servera onda treba cors 

Ovaj projekat je primer gornjeg nacina rada sa oba backend i frontend sve lepo iz vs code

kad smo zavrsili moze :

sve na jedan server od spring boot ( tada mvn package sa bundle profilom ) i startujemo app samo u springu
ili
spring boot deo sa ( mvn package ) pa startujemo spring boot app na port 8080, a ng build za frontend pa startujemo na port 4200




