window.ProjectAccountCopy = {
  "pl": {
    "profile": "Profil lokalny",
    "login": "Zaloguj się",
    "register": "Zarejestruj się",
    "logout": "Wyloguj się",
    "name": "Nazwa profilu",
    "password": "Hasło",
    "localInfo": "Profil zapisuje się w tej przeglądarce.",
    "credentialsRules": "Nazwa: 2–40 znaków. Hasło: 8–128 znaków.",
    "profileExists": "Taki profil już istnieje.",
    "invalidCredentials": "Nieprawidłowa nazwa lub hasło.",
    "storageError": "Nie udało się zapisać lub odczytać danych przeglądarki.",
    "secureContext": "Otwórz stronę przez HTTPS lub localhost, aby używać profili.",
    "cancel": "Anuluj"
  },
  "en": {
    "profile": "Local profile",
    "login": "Log in",
    "register": "Register",
    "logout": "Log out",
    "name": "Profile name",
    "password": "Password",
    "localInfo": "This profile is saved in this browser.",
    "credentialsRules": "Name: 2–40 characters. Password: 8–128 characters.",
    "profileExists": "This profile already exists.",
    "invalidCredentials": "Incorrect name or password.",
    "storageError": "Could not read or save browser data.",
    "secureContext": "Open via HTTPS or localhost to use profiles.",
    "cancel": "Cancel"
  },
  "de": {
    "profile": "Lokales Profil",
    "login": "Anmelden",
    "register": "Registrieren",
    "logout": "Abmelden",
    "name": "Profilname",
    "password": "Passwort",
    "localInfo": "Das Profil wird in diesem Browser gespeichert.",
    "credentialsRules": "Name: 2–40 Zeichen. Passwort: 8–128 Zeichen.",
    "profileExists": "Dieses Profil existiert bereits.",
    "invalidCredentials": "Name oder Passwort falsch.",
    "storageError": "Browserdaten konnten nicht gelesen oder gespeichert werden.",
    "secureContext": "Für Profile bitte HTTPS oder localhost verwenden.",
    "cancel": "Abbrechen"
  },
  "es": {
    "profile": "Perfil local",
    "login": "Iniciar sesión",
    "register": "Registrarse",
    "logout": "Cerrar sesión",
    "name": "Nombre del perfil",
    "password": "Contraseña",
    "localInfo": "El perfil se guarda en este navegador.",
    "credentialsRules": "Nombre: 2–40 caracteres. Contraseña: 8–128 caracteres.",
    "profileExists": "Este perfil ya existe.",
    "invalidCredentials": "Nombre o contraseña incorrectos.",
    "storageError": "No se pudieron leer o guardar los datos.",
    "secureContext": "Abre mediante HTTPS o localhost para usar perfiles.",
    "cancel": "Cancelar"
  },
  "fr": {
    "profile": "Profil local",
    "login": "Se connecter",
    "register": "S’inscrire",
    "logout": "Se déconnecter",
    "name": "Nom du profil",
    "password": "Mot de passe",
    "localInfo": "Le profil est enregistré dans ce navigateur.",
    "credentialsRules": "Nom : 2–40 caractères. Mot de passe : 8–128 caractères.",
    "profileExists": "Ce profil existe déjà.",
    "invalidCredentials": "Nom ou mot de passe incorrect.",
    "storageError": "Impossible de lire ou d’enregistrer les données.",
    "secureContext": "Utilisez HTTPS ou localhost pour les profils.",
    "cancel": "Annuler"
  },
  "uk": {
    "profile": "Локальний профіль",
    "login": "Увійти",
    "register": "Зареєструватися",
    "logout": "Вийти",
    "name": "Назва профілю",
    "password": "Пароль",
    "localInfo": "Профіль зберігається в цьому браузері.",
    "credentialsRules": "Назва: 2–40 символів. Пароль: 8–128 символів.",
    "profileExists": "Такий профіль уже існує.",
    "invalidCredentials": "Неправильна назва або пароль.",
    "storageError": "Не вдалося прочитати чи зберегти дані.",
    "secureContext": "Відкрийте через HTTPS або localhost для використання профілів.",
    "cancel": "Скасувати"
  },
  "ru": {
    "profile": "Локальный профиль",
    "login": "Войти",
    "register": "Зарегистрироваться",
    "logout": "Выйти",
    "name": "Название профиля",
    "password": "Пароль",
    "localInfo": "Профиль сохраняется в этом браузере.",
    "credentialsRules": "Название: 2–40 символов. Пароль: 8–128 символов.",
    "profileExists": "Такой профиль уже существует.",
    "invalidCredentials": "Неверное название или пароль.",
    "storageError": "Не удалось прочитать или сохранить данные.",
    "secureContext": "Откройте через HTTPS или localhost для работы с профилями.",
    "cancel": "Отмена"
  }
};

(() => {
  'use strict';

  function init() {
    const root = document.documentElement;
    const langSelect = document.querySelector('header select:is(#language,#lang)');
    const theme = document.querySelector('.project-theme');
    const languageControl = document.querySelector('header :is(.studio-language-switch summary,.language-menu summary,#language-toggle,.language-picker #lang)');
    if (languageControl) {
      languageControl.classList.add('project-language');
      [...languageControl.children].find(el => el.matches('svg,[data-icon]'))?.classList.add('project-language-glyph');
    } else if (langSelect) {
      const label = document.createElement('label');
      label.className = 'project-language project-language-native';
      langSelect.before(label);
      label.append(langSelect);
    }

    const clock = document.querySelector('.project-primer-clock');
    const account = document.querySelector('.project-account-open');
    const controlCopy = {
      pl: ['Czas lokalny','Włącz ciemny motyw','Włącz jasny motyw'],
      en: ['Local time','Use dark theme','Use light theme'],
      de: ['Ortszeit','Dunkles Design aktivieren','Helles Design aktivieren'],
      es: ['Hora local','Activar tema oscuro','Activar tema claro'],
      fr: ['Heure locale','Activer le thème sombre','Activer le thème clair'],
      uk: ['Місцевий час','Увімкнути темну тему','Увімкнути світлу тему'],
      ru: ['Местное время','Включить тёмную тему','Включить светлую тему']
    };
    const lang = () => controlCopy[root.lang] ? root.lang : 'en';
    const standaloneTheme = theme && !theme.id;
    if (standaloneTheme) {
      const key = 'nr.' + root.dataset.project + '.theme';
      try { root.dataset.theme = localStorage.getItem(key) === 'dark' ? 'dark' : 'light'; } catch {}
      theme.addEventListener('click', () => {
        root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(key, root.dataset.theme); } catch {}
      });
    }

    let format;
    function tick() {
      const now = new Date();
      const time = clock.querySelector('time');
      time.dateTime = now.toISOString();
      time.textContent = format.format(now);
    }
    function paintControls() {
      const copy = controlCopy[lang()];
      if (standaloneTheme) {
        const dark = root.dataset.theme === 'dark';
        theme.setAttribute('aria-label', copy[dark ? 2 : 1]);
        theme.setAttribute('aria-pressed', String(dark));
        theme.title = theme.getAttribute('aria-label');
      }
      if (clock) {
        clock.firstElementChild.textContent = copy[0];
        format = new Intl.DateTimeFormat(lang(), { timeStyle: 'medium' });
        tick();
      }
    }
    paintControls();
    new MutationObserver(paintControls).observe(root, { attributes: true, attributeFilter: ['lang','data-theme'] });
    if (clock) setInterval(tick, 1000);
    if (!account) return;

    const profiles = window.ProjectProfiles;
    const dialog = document.createElement('dialog');
    dialog.className = 'project-account-dialog';
    dialog.setAttribute('aria-labelledby','local-account-heading');
    dialog.innerHTML = '<form><h2 id="local-account-heading"></h2><p data-copy="localInfo"></p><div class="project-account-fields"><label><span data-copy="name"></span><input name="username" minlength="2" maxlength="40" autocomplete="username" required></label><label><span data-copy="password"></span><input name="password" type="password" minlength="8" maxlength="128" required></label><small data-copy="credentialsRules"></small></div><p class="project-account-error" role="alert"></p><div class="project-account-actions"><button class="project-account" type="submit" data-default></button><button class="project-account" type="button" data-switch></button><button class="project-account" type="button" data-logout data-copy="logout"></button><button class="project-account" type="button" data-close data-copy="cancel"></button></div></form>';
    document.body.append(dialog);
    const find = selector => dialog.querySelector(selector);
    const form = find('form'), fields = find('.project-account-fields');
    const password = form.elements.password, submit = find('[type=submit]');
    const switcher = find('[data-switch]'), logout = find('[data-logout]');
    const error = find('[role=alert]');
    const text = key => window.ProjectAccountCopy[lang()][key];
    let mode = 'login', issue = '', busy = false;

    function paintAccount() {
      const current = profiles.current();
      account.querySelector('.project-account-name').textContent = current?.name || text('login');
      account.setAttribute('aria-label', current ? text('profile') + ' · ' + current.name : text('login'));
      find('h2').textContent = current ? current.name : text(mode);
      dialog.querySelectorAll('[data-copy]').forEach(el => { el.textContent = text(el.dataset.copy); });
      fields.hidden = submit.hidden = switcher.hidden = Boolean(current);
      logout.hidden = !current;
      submit.textContent = text(mode);
      submit.disabled = busy;
      switcher.disabled = busy;
      switcher.textContent = text(mode === 'login' ? 'register' : 'login');
      password.autocomplete = mode === 'login' ? 'current-password' : 'new-password';
      error.textContent = issue ? text(issue) || text('storageError') : '';
    }

    account.addEventListener('click', () => {
      mode = 'login';
      issue = '';
      paintAccount();
      dialog.showModal();
    });
    switcher.addEventListener('click', () => {
      mode = mode === 'login' ? 'register' : 'login';
      issue = '';
      paintAccount();
      form.elements.username.focus();
    });
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (busy || profiles.current()) return;
      busy = true;
      issue = '';
      paintAccount();
      try {
        await profiles[mode](form.elements.username.value, password.value);
        dialog.close();
      } catch (failure) {
        issue = failure.message;
      } finally {
        busy = false;
        paintAccount();
      }
    });
    logout.addEventListener('click', () => {
      try { profiles.logout(); dialog.close(); }
      catch { issue = 'storageError'; }
      paintAccount();
    });
    find('[data-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => { form.reset(); issue = ''; });
    new MutationObserver(paintAccount).observe(root, { attributes: true, attributeFilter: ['lang'] });
    paintAccount();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
