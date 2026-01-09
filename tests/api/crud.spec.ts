import { test, expect } from '@playwright/test';

const EXISTING_POST_ID = 1;

test.describe('CRUD API – JSONPlaceholder (Stable)', () => {

  test('POST – create post (mock only)', async ({ request }) => {
    const response = await request.post('/posts', {
      data: {
        title: 'Playwright API Test',
        body: 'Postman collection migrated to Playwright',
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.id).toBeDefined();
  });

  test('GET – fetch existing post', async ({ request }) => {
    const response = await request.get(`/posts/${EXISTING_POST_ID}`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(EXISTING_POST_ID);
  });

  test('PUT – update existing post', async ({ request }) => {
    const response = await request.put(`/posts/${EXISTING_POST_ID}`, {
      data: {
        id: EXISTING_POST_ID,
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 1,
      },
    });

    expect(response.status()).toBe(200);
  });

  test('PATCH – partially update existing post', async ({ request }) => {
    const response = await request.patch(`/posts/${EXISTING_POST_ID}`, {
      data: {
        title: 'Patched Title',
      },
    });

    expect(response.status()).toBe(200);
  });

  test('DELETE – delete existing post (mock)', async ({ request }) => {
    const response = await request.delete(`/posts/${EXISTING_POST_ID}`);
    expect(response.status()).toBe(200);
  });

});
