<script>
  export let title = ''
  export let titleColor = ''
  export let buttonColor = ''
  export let buttonText = ''
  export let buttonTextColor = ''
</script>

<div>
  {#if title}
    <h3 style="color:{titleColor};">{title}</h3>
  {/if}
  <form
    action="https://getform.io/f/ed1f57ed-9359-4bdf-91ef-2b6fd39a2dc1"
    method="POST"
  >
    <input name="name" type="text" placeholder="Enter name..." required />
    <input name="email" type="email" placeholder="Enter email..." required />
    <input name="phone" type="tel" placeholder="Enter phone..." required />
    <p for="contact-type">I am a:</p>
    <div>
      <input
        type="radio"
        name="contact-type"
        value="Physician"
        id="physician"
      />
      <label for="contact-type">Physician</label>
    </div>
    <div>
      <input
        type="radio"
        name="contact-type"
        value="Care Provider"
        id="provider"
      />
      <label for="contact-type">Care Provider</label>
    </div>
    <div>
      <input type="radio" name="contact-type" value="Patient" id="patient" />
      <label for="contact-type">Patient</label>
    </div>
    <textarea name="message" placeholder="Enter message..." />
    <button
      type="submit"
      style="background:{buttonColor};color:{buttonTextColor};"
      >{buttonText}</button
    >
  </form>
</div>

<style>
  h3 {
    margin: 1em;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto 4em;
    padding: 2em;
    background: #f1f1f1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
    /* color: white; */
    font-weight: bold;
  }
  input,
  textarea,
  button {
    margin: 0.5em 0;
    padding: 1em;
    border: 1px solid #eee;
    outline: none;
  }
  input[type='radio'] {
    box-shadow: none;
  }
  textarea {
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 1em;
    min-height: 8em;
  }
  button {
    box-sizing: border-box;
    outline: none;
    border: none;
    font-size: 1rem;
    font-weight: bold;
  }
  button:hover {
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.24)
    ) !important;
  }
  form div {
    display: flex;
    align-items: center;
    margin-left: 1em;
  }
  label {
    padding-left: 1em;
  }
  form p {
    margin-top: 1em;
    margin-bottom: 0.25em;
  }
  @media screen and (max-width: 640px) {
    form {
      width: 320px;
    }
  }
</style>
