<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ranekapi' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('JWT_AUTH_SECRET_KEY', ']!/`e~3x`?`ya2}5?E-Z.<R={cruL3.8lj?o!?|FO?ZC&5sz+,m{mM#574!T6W69');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')nWZGa$jI5^2 :C0g*~h~`n+`d:B;XwQ3}O>DOd.EW.KM>1z5.=GzyjZ/>8.96U_' );
define( 'SECURE_AUTH_KEY',  'AttGdc@tHTSMoP?b7nw!s:$3dgc0`{DM~-BJ~U-V{tAP1(Cd_n7nl})`IX@iqB<}' );
define( 'LOGGED_IN_KEY',    'k1dXEVY 4J>ZP]puz6[?ueWC34>_e6*yJ;fjc{JOONpczD!$Hx!I.>M++6glvV# ' );
define( 'NONCE_KEY',        '7 b{XFbfu,+Nn,aP9%<#-#lPCt#Url>SW(5x^GvR$]RvhV!RA18Y7J&j#UPPBu./' );
define( 'AUTH_SALT',        'V&ub9f,,!tR#R>e!}BvF)!6[4R>Q]gQ#w%<*cm(m+FgGrrdBg{V|Vi];^iPDd+KK' );
define( 'SECURE_AUTH_SALT', '3$8?7W?IxR8jGeb;NT&[?;igwQJ??)t)GD!*ze>Qw5=}eEG[IkYO^6XO=#<qsopz' );
define( 'LOGGED_IN_SALT',   's5:#@vQ#CY)G|JK68,OBDUkuT]uG;toQPA6Z`+k$>~T3$$w;PK+Ei-)xM6f3D|zv' );
define( 'NONCE_SALT',       'ne{2#&_^aFhO2fk_{y.?bSI*u2EOo/J-foM;rZ;l6Cs_^$<WY`pi~.J.RQ=`Mw>@' );

define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

