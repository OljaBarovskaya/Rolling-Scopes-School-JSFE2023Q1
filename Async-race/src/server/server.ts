class Server {
  async startEngine(id: number) {
    const response: Response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=started`, {
      method: 'PATCH',
    });

    return response.json();
  }

  async stopEngine(id: number) {
    const response: Response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=stopped`, {
      method: 'PATCH',
    });
    return response.json();
  }

  async switchToDrive(id: number) {
    const response: Response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=drive`, {
      method: 'PATCH',
    });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    return response.json();
  }

  async getCarsAmount() {
    const response: Response = await fetch('http://127.0.0.1:3000/garage?');
    return response.json();
  }

  async getCarsFromServer(page: number) {
    const response: Response = await fetch(`http://127.0.0.1:3000/garage/?_page=${page}&_limit=7`);
    return response.json();
  }

  async deleteCarOnServer(id: number) {
    const response: Response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }

  async getCar(carID: number) {
    const response: Response = await fetch(`http://127.0.0.1:3000/garage/${carID}`);
    return response.json();
  }

  async createCarOnServer(data: { name: string, color: string } = { name: '', color: '' }) {
    const response: Response = await fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async updateCarOnServer(id: number, carName: string, carColor: string) {
    const response: Response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: carName,
        color: carColor,
      }),
    });

    return response.json();
  }
}

export default Server;
