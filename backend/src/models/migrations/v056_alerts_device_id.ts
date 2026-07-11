/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Migration } from './migrationFramework';

const v056AlertsDeviceId: Migration = {
  id: '20250101000056',
  version: 56,
  name: 'alerts_device_id',
  description: 'Add device_id column to alerts table for DC status monitoring',

  up: async (db: any) => {
    db.exec(`
      ALTER TABLE alerts ADD COLUMN device_id TEXT;
      CREATE INDEX IF NOT EXISTS idx_alerts_device_id ON alerts(device_id);
    `);
  },

  down: async (db: any) => {
    db.exec(`
      DROP INDEX IF EXISTS idx_alerts_device_id;
      ALTER TABLE alerts DROP COLUMN device_id;
    `);
  },
};

export default v056AlertsDeviceId;