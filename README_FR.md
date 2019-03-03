# Gladys-Xiaomi-Vacuum

Ce module vous permet de piloter l'aspirateur Xiaomi de première génération (Pas testé avec la seconde ;) ).

## Prérequis

Pour fonctionner, ce module nécessite :

- Gladys version 3.10.0 au minimum.

## Limitations

Nécessite de connaître le token de sécurité et l'adresse IP de l'aspirateur.

Voir [Obtenir le token](https://github.com/jghaanstra/com.xiaomi-miio/blob/master/docs/obtain_token.md)

## Installation

### Ajouter ce module à Gladys

- Installez ce module à partir de l'onglet "Avancé" de la page "Modules", en remplissant les différents champs de la façon suivante :

  - Nom : `Xiaomi vacuum`
  - Version : `3.4.0`
  - URL : `https://github.com/MathieuAndrade/gladys-xiaomi-vacuum.git`
  - Slug : `xiaomi-vacuum`

### Redémarrer Gladys

Depuis le premier onglet du menu "Paramètres", en cliquant sur le bouton "Redémarrer".

### Renseigner le token ainsi que l'adresse IP de l'aspirateur

1. Rendez-vous sur la page "Paramètres" de Gladys dans l'onglet "Paramètres".
2. Dans la liste des paramètres vous devriez voir deux paramètres nommés "Xiaomi_vacuum_Token" et "Xiaomi_vacuum_Address".
3. Remplacer respectivement le text de ces deux paramètres par le token et l'adresse.
4. Dernière étape, rendez-vous sur la page "Modules" de Gladys et cliquez sur le bouton "Configuration" du module pour lancer la connexion à votre aspirateur.

Enjoy :)

**Notez qu'une fois la première configuration faite, la connexion se fera automatiquement à chaque démarrage de Gladys.**
