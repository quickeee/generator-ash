'use strict';
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    chalk = require('chalk'),
    _ = require('underscore.string'),
    scriptBase = require('../script-base');

// Stores JHipster variables
this.ashVar = {};

// Stores JHipster functions
this.ashFunc = {};

var ModulesGenerator = module.exports = function ModulesGenerator(args, options, config) {

    this.ashVar = options.ashVar;
    this.ashFunc = options.ashFunc;

    if (this.ashVar == null ||
        this.ashVar.moduleName == null) {
        console.log(chalk.red('ERROR! This sub-generator must be used by JHipster modules, and the module name is not defined.'));
        process.exit(1);
    };
    console.log('Composing JHipster configuration with module ' + chalk.red(this.ashVar.moduleName));
    yeoman.generators.Base.apply(this, arguments);

    this.baseName = this.config.get('baseName');
    this.packageName = this.config.get('packageName');
    this.packageFolder = this.config.get('packageFolder');
    this.authenticationType = this.config.get('authenticationType');
    this.hibernateCache = this.config.get('hibernateCache');
    this.clusteredHttpSession = this.config.get('clusteredHttpSession');
    this.websocket = this.config.get('websocket');
    this.databaseType = this.config.get('databaseType');
    this.devDatabaseType = this.config.get('devDatabaseType');
    this.prodDatabaseType = this.config.get('prodDatabaseType');
    this.searchEngine = this.config.get('searchEngine');
    this.useSass = this.config.get('useSass');
    this.buildTool = this.config.get('buildTool');
    this.frontendBuilder = this.config.get('frontendBuilder');
    this.enableTranslation = this.config.get('enableTranslation');
    this.enableSocialSignIn = this.config.get('enableSocialSignIn');
    this.testFrameworks = this.config.get('testFrameworks');

    this.ashVar['baseName'] = this.baseName;
    this.ashVar['packageName'] = this.packageName;
    this.ashVar['packageFolder'] = this.packageFolder;
    this.ashVar['authenticationType'] = this.authenticationType;
    this.ashVar['hibernateCache'] = this.hibernateCache;
    this.ashVar['clusteredHttpSession'] = this.clusteredHttpSession;
    this.ashVar['websocket'] = this.websocket;
    this.ashVar['databaseType'] = this.databaseType;
    this.ashVar['devDatabaseType'] = this.devDatabaseType;
    this.ashVar['prodDatabaseType'] = this.prodDatabaseType;
    this.ashVar['searchEngine'] = this.searchEngine;
    this.ashVar['useSass'] = this.useSass;
    this.ashVar['buildTool'] = this.buildTool;
    this.ashVar['frontendBuilder'] = this.frontendBuilder;
    this.ashVar['enableTranslation'] = this.enableTranslation;
    this.ashVar['enableSocialSignIn'] = this.enableSocialSignIn;
    this.ashVar['testFrameworks'] = this.testFrameworks;
};

util.inherits(ModulesGenerator, yeoman.generators.Base);
util.inherits(ModulesGenerator, scriptBase);

ModulesGenerator.prototype.configurer = function configurer() {
    console.log('Reading the JHipster project configuration for your module');

    if (this.baseName == null ||
        this.packageName == null) {
        console.log(chalk.red('ERROR! There is no existing JHipster configuration file in this directory.'));
        console.log('JHipster ' + this.ashVar.moduleName + ' is a JHipster module, and needs a .yo-rc.json configuration file made by JHipster.');
        process.exit(1);
    }
    this.angularAppName = _.camelize(_.slugify(this.baseName)) + 'App';
    this.javaDir = 'src/main/java/' + this.packageFolder + '/';
    this.resourceDir = 'src/main/resources/';
    this.webappDir = 'src/main/webapp/';
    var modulesJsonFile = '.ash-modules.json';

    this.ashVar['angularAppName'] = this.angularAppName;
    this.ashVar['javaDir'] = this.javaDir;
    this.ashVar['resourceDir'] = this.resourceDir;
    this.ashVar['webappDir'] = this.webappDir;
    this.ashVar['modulesJsonFile'] = modulesJsonFile;

    this.ashFunc['addSocialButton'] = this.addSocialButton;
    this.ashFunc['addSocialConnectionFactory'] = this.addSocialConnectionFactory;
    this.ashFunc['addMavenDependency'] = this.addMavenDependency;
    this.ashFunc['addMavenPlugin'] = this.addMavenPlugin;
    this.ashFunc['addGradlePlugin'] = this.addGradlePlugin;
    this.ashFunc['addGradleDependency'] = this.addGradleDependency;
    this.ashFunc['addSocialConfiguration'] = this.addSocialConfiguration;
    this.ashFunc['applyFromGradleScript'] = this.applyFromGradleScript;
    this.ashFunc['addBowerrcParameter'] = this.addBowerrcParameter;
    this.ashFunc['addBowerDependency'] = this.addBowerDependency;
    this.ashFunc['addBowerOverride'] = this.addBowerOverride;
    this.ashFunc['addMainCSSStyle'] = this.addMainCSSStyle;
    this.ashFunc['addMainSCSSStyle'] = this.addMainSCSSStyle;
    this.ashFunc['addAngularJsModule'] = this.addAngularJsModule;
    this.ashFunc['addAngularJsConfig'] = this.addAngularJsConfig;
    this.ashFunc['addAngularJsInterceptor'] = this.addAngularJsInterceptor;
    this.ashFunc['addJavaScriptToIndex'] = this.addJavaScriptToIndex;
    this.ashFunc['addMessageformatLocaleToIndex'] = this.addMessageformatLocaleToIndex;
    this.ashFunc['addElementToMenu'] = this.addElementToMenu;
    this.ashFunc['addElementToAdminMenu'] = this.addElementToAdminMenu;
    this.ashFunc['addEntityToMenu'] = this.addEntityToMenu;
    this.ashFunc['addElementTranslationKey'] = this.addElementTranslationKey;
    this.ashFunc['addAdminElementTranslationKey'] = this.addAdminElementTranslationKey;
    this.ashFunc['addTranslationKeyToAllLanguages'] = this.addTranslationKeyToAllLanguages;
    this.ashFunc['getAllSupportedLanguages'] = this.getAllSupportedLanguages;
    this.ashFunc['getAllInstalledLanguages'] = this.getAllInstalledLanguages;
    this.ashFunc['addEntityTranslationKey'] = this.addEntityTranslationKey;
    this.ashFunc['addChangelogToLiquibase'] = this.addChangelogToLiquibase;
    this.ashFunc['addColumnToLiquibaseEntityChangeset'] = this.addColumnToLiquibaseEntityChangeset;
    this.ashFunc['dateFormatForLiquibase'] = this.dateFormatForLiquibase;
    this.ashFunc['copyI18nFilesByName'] = this.copyI18nFilesByName;
    this.ashFunc['copyTemplate'] = this.copyTemplate;
    this.ashFunc['copyHtml'] = this.copyHtml;
    this.ashFunc['copyJs'] = this.copyJs;
    this.ashFunc['rewriteFile'] = this.rewriteFile;
    this.ashFunc['replaceContent'] = this.replaceContent;
    this.ashFunc['registerModule'] = this.registerModule;

};
