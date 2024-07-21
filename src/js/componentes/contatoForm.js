function contatoForm() {
    const form = document.createElement('div');
    form.id = 'contato-form';
    form.className = 'contato-form';
    form.innerHTML = `
        <form id="formcontato">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    `;
    return form;
}

export {contatoForm};
