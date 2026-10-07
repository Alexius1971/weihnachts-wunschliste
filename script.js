<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meine Weihnachts-Wunschliste 2026</title>
    <meta name="description" content="Weihnachts-Wunschliste mit Passwortschutz und festlichem Design" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="aurora aurora-1"></div>
    <div class="aurora aurora-2"></div>
    <div class="sparkles sparkles-1"></div>
    <div class="sparkles sparkles-2"></div>
    <div class="snowfall"></div>
    <div class="lights lights-left"></div>
    <div class="lights lights-right"></div>

    <div id="login-screen" class="login-screen">
      <div class="password-card">
        <div class="ornament ornament-left"></div>
        <div class="ornament ornament-right"></div>

        <p class="eyebrow">Festliche Überraschung</p>
        <h1>Meine Weihnachts-Wunschliste 2026</h1>

        <form id="password-form">
          <label for="password">Passwort eingeben</label>
          <div class="input-wrap">
            <input id="password" type="password" placeholder="••••••••" required />
            <button type="submit">Entrée</button>
          </div>
          <p id="error-msg" class="error-msg" aria-live="polite"></p>
        </form>
      </div>
    </div>

    <main id="app" class="app hidden">
      <header class="topbar">
        <div class="brand">
          <span class="star">✦</span>
          <span>Meine Weihnachts-Wunschliste 2026</span>
        </div>
        <button id="logout-btn" class="logout-btn" type="button">Abmelden</button>
      </header>

      <section class="hero">
        <div class="hero-text">
          <p class="eyebrow">Liebe Weihnachten</p>
          <h2>Ein bisschen Magie, Liebe und schöne Dinge</h2>
          <p>
            Für die schönsten Momente im Advent – mit warmen Lichtern, gemütlichen Stunden und Dingen,
            die das Herz erwärmen.
          </p>
        </div>
        <div class="hero-illustration" aria-hidden="true">
          <div class="tree">
            <div class="tree-top"></div>
            <div class="tree-mid"></div>
            <div class="tree-bottom"></div>
            <div class="tree-trunk"></div>
            <div class="ornament o1"></div>
            <div class="ornament o2"></div>
            <div class="ornament o3"></div>
            <div class="ornament o4"></div>
            <div class="star-tree">★</div>
          </div>
        </div>
      </section>

      <section class="wishlist">
        <div class="section-heading">
          <span class="badge">Meine Wünsche</span>
          <h3>Meine Weihnachts-Wunschliste</h3>
        </div>

        <div id="wish-grid" class="gift-grid"></div>

        <div class="add-wish-section">
          <button id="add-wish-btn" class="add-wish-btn" type="button">+ Neuer Wunsch hinzufügen</button>
        </div>
      </section>

      <div id="wish-modal" class="modal hidden">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Neuen Wunsch hinzufügen</h2>
            <button class="close-btn" id="close-modal" aria-label="Schließen">✕</button>
          </div>

          <form id="wish-form">
            <div class="form-group">
              <label for="wish-title">Wunsch-Name *</label>
              <input type="text" id="wish-title" placeholder="z.B. Neue Jacke" required />
            </div>

            <div class="form-group">
              <label for="wish-description">Beschreibung</label>
              <textarea id="wish-description" placeholder="Beschreibe deinen Wunsch..."></textarea>
            </div>

            <div class="form-group">
              <label for="wish-image">Bild-Link (URL)</label>
              <input type="url" id="wish-image" placeholder="https://beispiel.com/bild.jpg" />
              <small>Tipp: Bilder von Amazon, eBay oder anderen Shops einfügen</small>
            </div>

            <div class="form-group">
              <label for="wish-link">Produkt-Link</label>
              <input type="url" id="wish-link" placeholder="https://amazon.de/..." />
              <small>Link zum Produkt, wo man es kaufen kann</small>
            </div>

            <div class="form-group">
              <label for="wish-price">Ungefährer Preis</label>
              <input type="text" id="wish-price" placeholder="€39" />
            </div>

            <div class="form-actions">
              <button type="submit" class="submit-btn">Wunsch speichern</button>
              <button type="button" id="cancel-wish" class="cancel-btn">Abbrechen</button>
            </div>
          </form>
        </div>
      </div>
    </main>

    <script src="script.js"></script>
  </body>
</html>
